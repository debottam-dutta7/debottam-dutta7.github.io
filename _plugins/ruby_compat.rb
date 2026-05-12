class << File
  # Ruby 3.2 removed File.exists?. Some older gems (for example jekyll-scholar 7.1.0)
  # still call it, so alias to File.exist? for compatibility.
  unless respond_to?(:exists?)
    def exists?(*args)
      exist?(*args)
    end
  end
end

# jekyll-minifier 0.1.10 crashes on macOS with Errno::EINTR when the livereload
# file watcher sends a signal during File.open. Retry up to 3 times.
Jekyll::Hooks.register :site, :after_init do
  module Jekyll::Compressor
    def output_file(dest, content)
      retries = 0
      begin
        FileUtils.mkdir_p(File.dirname(dest))
        File.open(dest, 'w') { |f| f.write(content) }
      rescue Errno::EINTR
        retries += 1
        retry if retries < 3
        raise
      end
    end
  end
end
