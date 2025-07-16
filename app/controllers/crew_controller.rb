require 'json'
class CrewController < ApplicationController
  before_action :set_data, only: %i[index]
  def index
  end

  private

  def set_data
    @crew_members = []
    @roles = %w[Captain Pilot Engineer Mechanic Navigator]
    # cache the crew members list
    # @crew_members = Rails.cache.fetch('crew_members', expires_in: 1.hours) do
    #   cached_crew = []
    #   20.times do |id|
    #     cached_crew << {
    #       id: (id + 1).to_s.ljust(2, '0'),
    #       name: Faker::Name.name,
    #       time: Faker::Time.between(from: DateTime.now - 5, to: DateTime.now).strftime('%Y-%m-%d %H:%M:%S'),
    #       done: Faker::Boolean.boolean,
    #       quatity: Faker::Number.between(from: 1, to: 100)
    #     }
    #   end
    #   cached_crew
    # end
    #
    20.times do |id|
      @crew_members << {
        id: (id + 1).to_s.rjust(3, '0'),
        name: Faker::Name.first_name,
        time: Faker::Time.between(from: DateTime.now - 5, to: DateTime.now).strftime('%H:%M'),
        done: Faker::Boolean.boolean,
        quantity: Faker::Number.between(from: 1, to: 100)
      }
    end
    @crew_members.to_json
  end
end
