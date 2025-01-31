class Code < ApplicationRecord
    
    validates :body, presence: true, uniqueness: true, length: { minimum: 1, maximum: 6 }
end
