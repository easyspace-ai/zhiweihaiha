package w6

import (
	"context"
	"strings"

	wsdk "ws-chat-tester/sdk"
)

func lastUserMessageIndex(messages []wsdk.AgentMessage) int {
	last := -1
	for i, msg := range messages {
		if strings.EqualFold(msg.Kind, "from_user") {
			last = i
		}
	}
	return last
}

func normalizeRoundPrompt(prompt string) string {
	prompt = strings.TrimSpace(prompt)
	for strings.HasPrefix(strings.ToLower(prompt), "@w6") {
		prompt = strings.TrimSpace(prompt[3:])
	}
	return prompt
}

func userMessageText(msg wsdk.AgentMessage) string {
	text := strings.TrimSpace(extractTextFromMessage(msg))
	return normalizeRoundPrompt(text)
}

// roundScopeStartIndex finds the last from_user matching the current round prompt.
// Falls back to the last from_user in the timeline when no match (legacy sessions).
func roundScopeStartIndex(messages []wsdk.AgentMessage, roundPrompt string) int {
	prompt := normalizeRoundPrompt(roundPrompt)
	if prompt != "" {
		lastMatch := -1
		for i, msg := range messages {
			if !strings.EqualFold(msg.Kind, "from_user") {
				continue
			}
			userText := userMessageText(msg)
			if userText == "" {
				continue
			}
			if userText == prompt || strings.Contains(userText, prompt) || strings.Contains(prompt, userText) {
				lastMatch = i
			}
		}
		if lastMatch >= 0 {
			return lastMatch
		}
	}
	return lastUserMessageIndex(messages)
}

// latestMarkdownFromMessages returns the last markdown artifact after the round anchor prompt.
func (r *Runner) latestMarkdownFromMessages(ctx context.Context, messages []wsdk.AgentMessage, roundPrompt string) string {
	start := roundScopeStartIndex(messages, roundPrompt) + 1
	if start < 0 {
		start = 0
	}
	var md string
	for i := start; i < len(messages); i++ {
		msg := messages[i]
		if strings.EqualFold(msg.Kind, "from_user") {
			continue
		}
		if candidate := r.extractMarkdownFromMessage(ctx, msg); candidate != "" {
			md = candidate
		}
	}
	return md
}

// lastUserFacingTextInRound returns the final assistant-facing text in the current round scope.
// Used when no markdown artifact exists for this round.
func lastUserFacingTextInRound(messages []wsdk.AgentMessage, roundPrompt string) string {
	start := roundScopeStartIndex(messages, roundPrompt) + 1
	if start < 0 {
		start = 0
	}
	var last string
	for i := start; i < len(messages); i++ {
		msg := messages[i]
		if strings.EqualFold(msg.Kind, "from_user") {
			continue
		}
		if text := extractRoundText(msg); text != "" {
			last = text
		}
	}
	return strings.TrimSpace(last)
}

// latestUserFacingText is kept for tests; returns the last (not concatenated) user_facing line.
func latestUserFacingText(messages []wsdk.AgentMessage) string {
	return lastUserFacingTextInRound(messages, "")
}

func extractRoundText(msg wsdk.AgentMessage) string {
	kind := strings.ToLower(strings.TrimSpace(msg.Kind))
	if kind != "" && kind != "user_facing" && kind != "assistant" && kind != "from_assistant" {
		return ""
	}
	return extractTextFromMessage(msg)
}
