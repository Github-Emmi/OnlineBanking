from .modules import *

# Create your views here
def index(request):
     return render(request, 'account_templates/index.html', {})