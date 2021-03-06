class CartSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :cart_items, :total_items, :total_price
  has_many :cart_items
end