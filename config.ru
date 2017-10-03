# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)

# map '/ror/sso_client' do
	run Rails.application
# end
