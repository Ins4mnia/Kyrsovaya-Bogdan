package repository

import "github.com/noodypv/kursovaya/internal/model"

func (r *Repository) NewMaterial(m *model.Material) error {
	err := r.db.Create(m).Error

	return err
}
