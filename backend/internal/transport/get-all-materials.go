package transport

import (
	"log/slog"
	"net/http"
)

func (h *Handler) GetAllMaterials() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		materials, err := h.repo.GetAllMaterials()
		if err != nil {
			slog.Error("GetAllMaterials", "error", err)

			WriteJSON(res, nil, err)

			return
		}

		WriteJSON(res, materials, nil)
	}
}
