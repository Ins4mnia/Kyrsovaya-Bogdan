package repository

import "github.com/noodypv/kursovaya/internal/model"

func (r *Repository) NewOrder(or *model.Order) error {
	err := r.db.Create(or).Error

	return err
}
