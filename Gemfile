source 'https://rubygems.org'
group :jekyll_plugins do
  gem "html-proofer"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jemoji"
  if ENV['JEKYLL_ENV'] == "production" || ENV['JEKYLL_ENV'] == "aws"
    gem "jekyll-pwa-plugin", "~> 2.0"
  end
  gem "s3_website"
end
