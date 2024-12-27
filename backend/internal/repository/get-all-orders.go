package repository

import "github.com/noodypv/kursovaya/internal/model"

func (r *Repository) GetAllOrders() ([]model.Order, error) {
	var orders []model.Order

	err := r.db.
		Select("username", "id", "phone").
		Find(&orders).
		Error

	return orders, err
}
