require('dotenv').config();

const { execSync } = require('child_process');

const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {
    let token;
  
    beforeAll(async done => {
      execSync('npm run setup-db');
  
      client.connect();
  
      const signInData = await fakeRequest(app)
        .post('/auth/signup')
        .send({
          email: 'jon@user.com',
          password: '1234'
        });
      
      token = signInData.body.token; // eslint-disable-line
  
      return done();
    });
  
    afterAll(done => {
      return client.end(done);
    });

    test('returns a list of representatives from the propublica API', async() => {

      const expectation =
        [
          {
            'id': 'A000374',
            'title': 'Representative',
            'short_title': 'Rep.',
            'api_uri': 'https://api.propublica.org/congress/v1/members/A000374.json',
            'first_name': 'Ralph',
            'middle_name': null,
            'last_name': 'Abraham',
            'suffix': null,
            'date_of_birth': '1954-09-16',
            'gender': 'M',
            'party': 'R',
            'leadership_role': '',
            'twitter_account': 'RepAbraham',
            'facebook_account': 'CongressmanRalphAbraham',
            'youtube_account': null,
            'govtrack_id': '412630',
            'cspan_id': '76236',
            'votesmart_id': '155414',
            'icpsr_id': '21522',
            'crp_id': 'N00036633',
            'google_entity_id': '/m/012dwd7_',
            'fec_candidate_id': 'H4LA05221',
            'url': 'https://abraham.house.gov',
            'rss_url': 'https://abraham.house.gov/rss.xml',
            'contact_form': null,
            'in_office': false,
            'cook_pvi': 'R+15',
            'dw_nominate': 0.541,
            'ideal_point': null,
            'seniority': '6',
            'next_election': '2020',
            'total_votes': 954,
            'missed_votes': 377,
            'total_present': 0,
            'last_updated': '2020-12-31 18:30:50 -0500',
            'ocd_id': 'ocd-division/country:us/state:la/cd:5',
            'office': '417 Cannon House Office Building',
            'phone': '202-225-8490',
            'fax': null,
            'state': 'LA',
            'district': '5',
            'at_large': false,
            'geoid': '2205',
            'missed_votes_pct': 39.52,
            'votes_with_party_pct': 94.93,
            'votes_against_party_pct': 4.90
          },
          {
            'id': 'A000370',
            'title': 'Representative',
            'short_title': 'Rep.',
            'api_uri': 'https://api.propublica.org/congress/v1/members/A000370.json',
            'first_name': 'Alma',
            'middle_name': null,
            'last_name': 'Adams',
            'suffix': null,
            'date_of_birth': '1946-05-27',
            'gender': 'F',
            'party': 'D',
            'leadership_role': null,
            'twitter_account': 'RepAdams',
            'facebook_account': 'CongresswomanAdams',
            'youtube_account': null,
            'govtrack_id': '412607',
            'cspan_id': '76386',
            'votesmart_id': '5935',
            'icpsr_id': '21545',
            'crp_id': 'N00035451',
            'google_entity_id': '/m/02b45d',
            'fec_candidate_id': 'H4NC12100',
            'url': 'https://adams.house.gov',
            'rss_url': 'https://adams.house.gov/rss.xml',
            'contact_form': null,
            'in_office': false,
            'cook_pvi': 'D+18',
            'dw_nominate': -0.465,
            'ideal_point': null,
            'seniority': '8',
            'next_election': '2020',
            'total_votes': 954,
            'missed_votes': 26,
            'total_present': 0,
            'last_updated': '2021-03-02 02:35:22 -0500',
            'ocd_id': 'ocd-division/country:us/state:nc/cd:12',
            'office': '2436 Rayburn House Office Building',
            'phone': '202-225-1510',
            'fax': null,
            'state': 'NC',
            'district': '12',
            'at_large': false,
            'geoid': '3712',
            'missed_votes_pct': 2.73,
            'votes_with_party_pct': 99.24,
            'votes_against_party_pct': 0.65
          },
          {
            'id': 'A000055',
            'title': 'Representative',
            'short_title': 'Rep.',
            'api_uri': 'https://api.propublica.org/congress/v1/members/A000055.json',
            'first_name': 'Robert',
            'middle_name': 'B.',
            'last_name': 'Aderholt',
            'suffix': null,
            'date_of_birth': '1965-07-22',
            'gender': 'M',
            'party': 'R',
            'leadership_role': null,
            'twitter_account': 'Robert_Aderholt',
            'facebook_account': 'RobertAderholt',
            'youtube_account': 'RobertAderholt',
            'govtrack_id': '400004',
            'cspan_id': '45516',
            'votesmart_id': '441',
            'icpsr_id': '29701',
            'crp_id': 'N00003028',
            'google_entity_id': '/m/024p03',
            'fec_candidate_id': 'H6AL04098',
            'url': 'https://aderholt.house.gov',
            'rss_url': 'https://aderholt.house.gov/rss.xml',
            'contact_form': null,
            'in_office': false,
            'cook_pvi': 'R+30',
            'dw_nominate': 0.369,
            'ideal_point': null,
            'seniority': '24',
            'next_election': '2020',
            'total_votes': 954,
            'missed_votes': 71,
            'total_present': 0,
            'last_updated': '2021-03-02 02:35:23 -0500',
            'ocd_id': 'ocd-division/country:us/state:al/cd:4',
            'office': '1203 Longworth House Office Building',
            'phone': '202-225-4876',
            'fax': null,
            'state': 'AL',
            'district': '4',
            'at_large': false,
            'geoid': '0104',
            'missed_votes_pct': 7.44,
            'votes_with_party_pct': 93.60,
            'votes_against_party_pct': 6.29
          },
          {
            'id': 'A000371',
            'title': 'Representative',
            'short_title': 'Rep.',
            'api_uri': 'https://api.propublica.org/congress/v1/members/A000371.json',
            'first_name': 'Pete',
            'middle_name': null,
            'last_name': 'Aguilar',
            'suffix': null,
            'date_of_birth': '1979-06-19',
            'gender': 'M',
            'party': 'D',
            'leadership_role': null,
            'twitter_account': 'reppeteaguilar',
            'facebook_account': 'reppeteaguilar',
            'youtube_account': null,
            'govtrack_id': '412615',
            'cspan_id': '79994',
            'votesmart_id': '70114',
            'icpsr_id': '21506',
            'crp_id': 'N00033997',
            'google_entity_id': '/m/0jwv0xf',
            'fec_candidate_id': 'H2CA31125',
            'url': 'https://aguilar.house.gov',
            'rss_url': 'https://aguilar.house.gov/rss.xml',
            'contact_form': null,
            'in_office': false,
            'cook_pvi': 'D+8',
            'dw_nominate': -0.291,
            'ideal_point': null,
            'seniority': '6',
            'next_election': '2020',
            'total_votes': 954,
            'missed_votes': 9,
            'total_present': 0,
            'last_updated': '2021-03-02 02:35:23 -0500',
            'ocd_id': 'ocd-division/country:us/state:ca/cd:31',
            'office': '109 Cannon House Office Building',
            'phone': '202-225-3201',
            'fax': null,
            'state': 'CA',
            'district': '31',
            'at_large': false,
            'geoid': '0631',
            'missed_votes_pct': 0.94,
            'votes_with_party_pct': 97.45,
            'votes_against_party_pct': 2.44
          },
          {
            'id': 'A000372',
            'title': 'Representative',
            'short_title': 'Rep.',
            'api_uri': 'https://api.propublica.org/congress/v1/members/A000372.json',
            'first_name': 'Rick',
            'middle_name': null,
            'last_name': 'Allen',
            'suffix': null,
            'date_of_birth': '1951-11-07',
            'gender': 'M',
            'party': 'R',
            'leadership_role': null,
            'twitter_account': 'reprickallen',
            'facebook_account': 'CongressmanRickAllen',
            'youtube_account': null,
            'govtrack_id': '412625',
            'cspan_id': '62545',
            'votesmart_id': '136062',
            'icpsr_id': '21516',
            'crp_id': 'N00033720',
            'google_entity_id': '/m/0127y9dk',
            'fec_candidate_id': 'H2GA12121',
            'url': 'https://allen.house.gov',
            'rss_url': null,
            'contact_form': null,
            'in_office': false,
            'cook_pvi': 'R+9',
            'dw_nominate': 0.679,
            'ideal_point': null,
            'seniority': '6',
            'next_election': '2020',
            'total_votes': 954,
            'missed_votes': 15,
            'total_present': 0,
            'last_updated': '2021-03-02 02:35:23 -0500',
            'ocd_id': 'ocd-division/country:us/state:ga/cd:12',
            'office': '2400 Rayburn House Office Building',
            'phone': '202-225-2823',
            'fax': null,
            'state': 'GA',
            'district': '12',
            'at_large': false,
            'geoid': '1312',
            'missed_votes_pct': 1.57,
            'votes_with_party_pct': 92.26,
            'votes_against_party_pct': 7.63
          }
        ];

      const data = await fakeRequest(app)
        .get('/api/congress/house')
        .set({ Authorization: token })
        .expect('Content-Type', /json/)
        .expect(200);
      
      const truncatedData = data.body.slice(0, 5);

      expect(truncatedData).toEqual(expectation);
    });
  });
});
