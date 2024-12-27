package repository

import "github.com/noodypv/kursovaya/internal/model"

func (r *Repository) GetAllMaterials() ([]model.Material, error) {
	var services []model.Material

	err := r.db.
		Select("id", "title", "source_path").
		Find(&services).
		Error

	return services, err
}
