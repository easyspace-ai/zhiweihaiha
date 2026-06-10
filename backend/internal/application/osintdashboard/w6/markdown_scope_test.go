package w6

import (
	"testing"

	wsdk "ws-chat-tester/sdk"
)

func TestLastUserMessageIndex(t *testing.T) {
	msgs := []wsdk.AgentMessage{
		{Kind: "from_user"},
		{Kind: "assistant", Content: "a"},
		{Kind: "from_user"},
		{Kind: "user_facing", Content: "b"},
	}
	if got := lastUserMessageIndex(msgs); got != 2 {
		t.Fatalf("want 2, got %d", got)
	}
}

func TestLatestUserFacingTextScopesToCurrentRound(t *testing.T) {
	msgs := []wsdk.AgentMessage{
		{Kind: "from_user", Content: "round1"},
		{Kind: "user_facing", Content: "old answer"},
		{Kind: "from_user", Content: "round2"},
		{Kind: "tool", Content: "hidden"},
		{Kind: "user_facing", Content: "new answer"},
	}
	got := latestUserFacingText(msgs)
	if got != "new answer" {
		t.Fatalf("want last scoped text, got %q", got)
	}
}

func TestLatestUserFacingTextUsesLastNotConcat(t *testing.T) {
	msgs := []wsdk.AgentMessage{
		{Kind: "from_user", Content: "q"},
		{Kind: "user_facing", Content: "part one"},
		{Kind: "user_facing", Content: "part two"},
	}
	got := latestUserFacingText(msgs)
	if got != "part two" {
		t.Fatalf("want last segment only, got %q", got)
	}
}

func TestRoundScopeStartIndexMatchesPrompt(t *testing.T) {
	msgs := []wsdk.AgentMessage{
		{Kind: "from_user", Content: "我要设计一个动态工作流"},
		{Kind: "user_facing", Content: "round1"},
		{Kind: "from_user", Content: "@w6 调研一下这个hatchet 这个项目，我们想用这个来实施"},
		{Kind: "user_facing", Content: "round2"},
	}
	prompt := "调研一下这个hatchet 这个项目，我们想用这个来实施"
	if got := roundScopeStartIndex(msgs, prompt); got != 2 {
		t.Fatalf("want anchor index 2, got %d", got)
	}
	if got := lastUserFacingTextInRound(msgs, prompt); got != "round2" {
		t.Fatalf("want round2 text, got %q", got)
	}
}

func TestLatestUserFacingTextIncludesAssistantKind(t *testing.T) {
	msgs := []wsdk.AgentMessage{
		{Kind: "from_user", Content: "q"},
		{Kind: "assistant", Content: "reply"},
	}
	got := latestUserFacingText(msgs)
	if got != "reply" {
		t.Fatalf("want reply, got %q", got)
	}
}
