class CodesController < ApplicationController
    def index
        @code = Code.new
        @codes = Code.all
    end
    
    def create
        @codes = Code.all
        @code = Code.new(code_params)
        if @code.save
            redirect_to codes_path
        else
            render :index
        end
    end
    
    def destroy
        code = Code.find(params[:id])
        code.destroy
        redirect_to codes_path
    end
    
    
    private
    
    def code_params
        params.require(:code).permit(:body)
    end
  
end
