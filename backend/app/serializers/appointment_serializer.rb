class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :when, :establishment_id, :type, :user_id_one, :user_id_two, :code_word
end