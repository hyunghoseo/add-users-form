from app import db


class Users(db.Model):
    
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(32), index=True, unique=False)
    lname = db.Column(db.String(32), index=True, unique=False)
    email = db.Column(db.String(32), index=True, unique=False)

    def __repr__(self):
        return '<User %r>' % (self.fname)
    
