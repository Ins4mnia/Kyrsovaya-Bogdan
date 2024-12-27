package transport

import (
	"log/slog"
	"net/http"
)

func (h *Handler) GetAllOrders() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		orders, err := h.repo.GetAllOrders()
		if err != nil {
			slog.Error("GetAllOrders", "error", err)

			WriteJSON(res, nil, err)

			return
		}

		WriteJSON(res, orders, nil)
	}
}
