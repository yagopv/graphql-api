const { RESTDataSource } = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4001/speakers';
  }

  async getSpeakersByID(id) {
    const data = await this.get(`/${id}`);
    return data;
  }

  async getSpeakers() {
    const data = await this.get(`/`);
    return data;
  }
}

module.exports = SpeakerAPI;
