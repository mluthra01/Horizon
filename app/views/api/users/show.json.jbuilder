# expected json response
# {user" { 
# id :
# email
# password
# name
# }}

json.user do
    json.extract! @user, :id, :name, :email, :created_at
end
