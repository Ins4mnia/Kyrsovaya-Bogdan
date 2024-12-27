package transport

import (
	"encoding/json"
	"log/slog"
	"net/http"

	"github.com/noodypv/kursovaya/internal/model"
)

func (h *Handler) NewOrder() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		var order model.Order

		if err := json.NewDecoder(req.Body).Decode(&order); err != nil {
			slog.Error("failed to decode", "error", err)
			WriteJSON(res, nil, err)

			return
		}

		if err := h.repo.NewOrder(&order); err != nil {
			slog.Error("failed to create new order", "error", err)
			WriteJSON(res, nil, err)

			return
		}
	}
}
