json.array!(@filter_links) do |link|
  json.title  link['title']
  json.url    link['url']
end