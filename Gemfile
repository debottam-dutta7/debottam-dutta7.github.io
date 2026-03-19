source 'https://rubygems.org'

group :jekyll_plugins do
    gem 'jekyll'
    gem 'jekyll-archives'
    gem 'jekyll-diagrams'
    gem 'jekyll-email-protect'
    gem 'jekyll-feed'
    gem 'jekyll-imagemagick'
    gem 'jekyll-minifier'
    gem 'jekyll-paginate-v2'
    gem 'jekyll-scholar'
    gem 'jekyll-sitemap'
    gem 'jekyll-target-blank'
    gem 'jekyll-twitter-plugin'
    gem 'jemoji'
    gem 'mini_racer' unless Gem.win_platform?
    gem 'unicode_utils'
    gem 'webrick'
    gem 'sass-embedded', '~> 1.67'
end

# Fix for uri gem version conflict
gem 'uri', '~> 1.0'
# Use a recent Nokogiri so Windows can install a precompiled native gem.
gem 'nokogiri', '>= 1.16.0'
# Liquid 4.0.3 crashes on modern Ruby due to removed taint APIs.
gem 'liquid', '>= 4.0.4'
group :other_plugins do
    gem 'httparty'
    gem 'feedjira'
end
