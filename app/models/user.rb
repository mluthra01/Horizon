class User < ApplicationRecord

  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :name, 
  presence: { message: "Please enter a name" },
  length: { maximum: 50, message: "Name is too long" },
  format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, 
  length: { in: 3..255},
  format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { in: 6..255 }, allow_nil: true

  has_secure_password
  before_validation :ensure_session_token


  def self.find_by_credentials(email, password)
      user = User.find_by_email(email)
      if user && user.authenticate(password)
        return user
      else
        return nil
      end
  end

  # def self.find_by_credentials(email, password)
  #  user = User.find_by(email: email)
  #   user&.authenticate(password)
  # end


  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
    # self.update!(session_token: generate_unique_session_token)
    # self.session_token
  end
  private

  def generate_unique_session_token
    loop do
      session_token = SecureRandom.urlsafe_base64
      break session_token unless User.exists?(session_token: session_token)
    end
  end


  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end



end
