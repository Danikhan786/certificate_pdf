require 'pdftoimage'

class PdfController < ApplicationController
  def convert_image
    pdf_path = params[:pdf].tempfile.path

    images = PDFToImage.open(pdf_path).each_with_index.map do |img, index|
      img_path = "/var/folders/m4/qk928bqs35dg9zghg5mj9gw80000gn/T/pdftoimage-#{index}"
      img.save(img_path)

      base64_image = Base64.encode64(File.read(img_path))
      "data:image/jpeg;base64,#{base64_image}"
    end

    render json: { images: images }
  end
end
