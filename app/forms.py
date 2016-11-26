from flask_wtf import Form
from wtforms import StringField
from wtforms.validators import required, Email

class AddUsers(Form):
	fname = StringField('First name', validators=[required()])
	lname = StringField('Last name', validators=[required()])
	email = StringField('Email', validators=[required(),Email()])