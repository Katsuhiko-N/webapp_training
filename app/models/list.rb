class List < ApplicationRecord
    
    validates :body, presence: true, uniqueness: true
    
end
