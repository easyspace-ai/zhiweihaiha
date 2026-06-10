package aichat

// isRoundUserStopped is true when the user explicitly stopped the round via POST .../stop.
func isRoundUserStopped(events []SessionEvent, roundID string) bool {
	if roundID == "" {
		return false
	}
	for _, ev := range events {
		if ev.RoundID != roundID {
			continue
		}
		if ev.Type == EventRoundSealed && SealReason(ev.Reason) == SealStopped {
			return true
		}
	}
	for _, ev := range events {
		if ev.RoundID != roundID || ev.Type != EventW6Status {
			continue
		}
		if W6Status(ev.Status) == W6StatusStopped {
			return true
		}
	}
	return false
}
