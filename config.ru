require 'pry'

app = proc do |a|

  requested_file = if a["PATH_INFO"] == "/"
                     "index.html"
                   else
                     a["PATH_INFO"].gsub(/^\//, "")
                   end
  [200, {}, [File.read(requested_file)]]
end

run  app
