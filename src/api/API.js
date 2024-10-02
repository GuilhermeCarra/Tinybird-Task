export default class API {
  #baseUrl = 'https://api.tinybird.co/v0';
  #token = 'token=p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c';

  getYellowTripData(query) {
    return this.#get(`${this.#baseUrl}/pipes/yellow_tripdata_2017_pipe.json?${this.#token}&q=${query}`);
  }

  async #get(endpoint) {
    try {
      const response = await fetch(encodeURI(endpoint));
      return response.json();
    } catch(error) {
      return {
        error
      }
    }
  }
}