package w6

import (
	"context"

	wsdk "ws-chat-tester/sdk"
)

const (
	agentMessagesPageSize = 200
	agentMessagesMaxPages = 30
)

func (r *Runner) fetchAllAgentMessages(ctx context.Context, upstreamID string) ([]wsdk.AgentMessage, error) {
	if r.client == nil {
		return nil, nil
	}
	var all []wsdk.AgentMessage
	for page := 0; page < agentMessagesMaxPages; page++ {
		offset := page * agentMessagesPageSize
		resp, err := r.client.AgentMessages(ctx, upstreamID, agentMessagesPageSize, offset)
		if err != nil {
			if len(all) > 0 {
				return all, nil
			}
			return nil, err
		}
		if len(resp.Messages) == 0 {
			break
		}
		all = append(all, resp.Messages...)
		if len(resp.Messages) < agentMessagesPageSize {
			break
		}
	}
	return all, nil
}
