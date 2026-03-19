class << File
  # Ruby 3.2 removed File.exists?. Some older gems (for example jekyll-scholar 7.1.0)
  # still call it, so alias to File.exist? for compatibility.
  unless respond_to?(:exists?)
    def exists?(*args)
      exist?(*args)
    end
  end
end
