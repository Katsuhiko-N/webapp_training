class ListsController < ApplicationController
    def index
        @list = List.new
        @lists = List.all
    end
    
end
