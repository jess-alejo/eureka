module ApplicationHelper
  def active_link(name)
    controller_name == name ? 'active' : ''
  end
end
