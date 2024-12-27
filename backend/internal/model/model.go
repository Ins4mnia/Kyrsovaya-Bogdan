package model

type Order struct {
	Id       int    `json:"id" gorm:"Column:id"`
	Username string `json:"username" gorm:"Column:username"`
	Phone    string `json:"phone" gorm:"Column:phone"`
}

func (or *Order) TableName() string {
	return "orders"
}

type Material struct {
	Id         int    `json:"id" gorm:"Column:id"`
	Title      string `json:"title" gorm:"Column:title"`
	SourcePath string `json:"source_path" gorm:"source_path"`
}

func (s *Material) TableName() string {
	return "materials"
}
