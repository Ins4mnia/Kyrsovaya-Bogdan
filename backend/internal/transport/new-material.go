package transport

import (
	"encoding/json"
	"log/slog"
	"net/http"

	"github.com/noodypv/kursovaya/internal/model"
)

func (h *Handler) NewMaterial() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		var material model.Material

		if err := json.NewDecoder(req.Body).Decode(&material); err != nil {
			slog.Error("failed to decode", "error", err)
			WriteJSON(res, nil, err)

			return
		}

		if err := h.repo.NewMaterial(&material); err != nil {
			slog.Error("failed to create new material", "error", err)
			WriteJSON(res, nil, err)

			return
		}
	}
}
