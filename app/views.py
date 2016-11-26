from flask import render_template, flash, redirect, g
from app import app, db, models
from .models import Users
from .forms import AddUsers

@app.route('/', methods=['GET', 'POST'])

@app.route('/form', methods=['GET', 'POST'])
def form():
    form = AddUsers()
    if form.validate_on_submit():
        u = models.Users(fname=form.fname.data, lname=form.lname.data, email=form.email.data)
        db.session.add(u)
        db.session.commit()
    else:
        flash_errors(form) 
    
    return render_template('form.html', form=form)

@app.route('/table')
def table():
    cur = db.engine.execute('select fname, lname, email from users order by id asc')
    users = [dict(fname=row[0], lname=row[1], email=row[2])  for row in cur.fetchall()]
    return render_template('table.html', users=users)


def flash_errors(form):
    for field, errors in form.errors.items():
        for error in errors:
            flash(u"%s - %s" % (
                getattr(form, field).label.text,
                error
            ))