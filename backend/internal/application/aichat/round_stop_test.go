package aichat

import (
	"testing"

	"github.com/easyspace-ai/ylmnote/internal/application/osintdashboard"
)

func TestIsRoundUserStopped(t *testing.T) {
	events := []SessionEvent{
		{Type: EventRoundStarted, RoundID: "r1", Kind: string(RoundKindW6Manual)},
		{Type: EventW6Log, RoundID: "r1", LogType: "stopped", Body: "用户手动停止 W6 调研"},
		{Type: EventW6Status, RoundID: "r1", Status: string(W6StatusStopped)},
		{Type: EventRoundSealed, RoundID: "r1", Reason: string(SealStopped)},
	}
	if !isRoundUserStopped(events, "r1") {
		t.Fatal("expected user-stopped round")
	}
	if isRoundUserStopped(events, "r2") {
		t.Fatal("other round should not be stopped")
	}
}

func TestWorkflowCanForceFinalizeSkipsUserStopped(t *testing.T) {
	events := []SessionEvent{
		{Type: EventW6Log, RoundID: "r1", Body: "报告草稿就绪，等待收尾…"},
		{Type: EventRoundSealed, RoundID: "r1", Reason: string(SealStopped)},
	}
	ws := &osintdashboard.WorkflowState{SubAgentStatus: "idle", Markdown: "# draft"}
	if workflowCanForceFinalizeOnReload(events, "r1", ws) {
		t.Fatal("user-stopped round must not force finalize")
	}
}
