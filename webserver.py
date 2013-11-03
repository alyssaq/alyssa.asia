import os
import jinja2
import webapp2

HTML_PATH = "templates"

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), HTML_PATH)),
    extensions=['jinja2.ext.autoescape'])

class MainPage(webapp2.RequestHandler):
    def get(self, base_href):
        template_values = {
            'title': 'Alyssa Quek'
        }
        filename = base_href if bool(base_href) else "index"
        try:
            template = JINJA_ENVIRONMENT.get_template("%s.html" % filename)
        except jinja2.TemplateNotFound:    
            template = JINJA_ENVIRONMENT.get_template("404.html")

        self.response.write(template.render(template_values))


application = webapp2.WSGIApplication([
    (r"/(.*)/?", MainPage)
], debug=False)
