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

    test('returns a list of senators from the propublica API', async() => {

      const expectation = 
      [
        {
          'id': 'A000360',
          'title': 'Senator, 2nd Class',
          'short_title': 'Sen.',
          'api_uri': 'https://api.propublica.org/congress/v1/members/A000360.json',
          'first_name': 'Lamar',
          'middle_name': null,
          'last_name': 'Alexander',
          'suffix': null,
          'date_of_birth': '1940-07-03',
          'gender': 'M',
          'party': 'R',
          'leadership_role': null,
          'twitter_account': 'SenAlexander',
          'facebook_account': 'senatorlamaralexander',
          'youtube_account': 'lamaralexander',
          'govtrack_id': '300002',
          'cspan_id': '5',
          'votesmart_id': '15691',
          'icpsr_id': '40304',
          'crp_id': 'N00009888',
          'google_entity_id': '/m/01rbs3',
          'fec_candidate_id': 'S2TN00058',
          'url': 'https://www.alexander.senate.gov/public',
          'rss_url': 'https://www.alexander.senate.gov/public/?a=RSS.Feed',
          'contact_form': 'http://www.alexander.senate.gov/public/index.cfm?p=Email',
          'in_office': false,
          'cook_pvi': null,
          'dw_nominate': 0.324,
          'ideal_point': null,
          'seniority': '17',
          'next_election': '2020',
          'total_votes': 717,
          'missed_votes': 133,
          'total_present': 0,
          'last_updated': '2020-12-30 19:01:18 -0500',
          'ocd_id': 'ocd-division/country:us/state:tn',
          'office': '455 Dirksen Senate Office Building',
          'phone': '202-224-4944',
          'fax': '202-228-3398',
          'state': 'TN',
          'senate_class': '2',
          'state_rank': 'senior',
          'lis_id': 'S289',
          'missed_votes_pct': 18.55,
          'votes_with_party_pct': 96.55,
          'votes_against_party_pct': 3.45
        },
        {
          'id': 'B001230',
          'title': 'Senator, 1st Class',
          'short_title': 'Sen.',
          'api_uri': 'https://api.propublica.org/congress/v1/members/B001230.json',
          'first_name': 'Tammy',
          'middle_name': null,
          'last_name': 'Baldwin',
          'suffix': null,
          'date_of_birth': '1962-02-11',
          'gender': 'F',
          'party': 'D',
          'leadership_role': null,
          'twitter_account': 'SenatorBaldwin',
          'facebook_account': 'senatortammybaldwin',
          'youtube_account': 'witammybaldwin',
          'govtrack_id': '400013',
          'cspan_id': '57884',
          'votesmart_id': '3470',
          'icpsr_id': '29940',
          'crp_id': 'N00004367',
          'google_entity_id': '/m/024v02',
          'fec_candidate_id': 'H8WI00018',
          'url': 'https://www.baldwin.senate.gov',
          'rss_url': 'https://www.baldwin.senate.gov/rss/feeds/?type=all',
          'contact_form': 'https://www.baldwin.senate.gov/feedback',
          'in_office': false,
          'cook_pvi': null,
          'dw_nominate': -0.493,
          'ideal_point': null,
          'seniority': '7',
          'next_election': '2024',
          'total_votes': 717,
          'missed_votes': 2,
          'total_present': 1,
          'last_updated': '2020-12-30 19:01:18 -0500',
          'ocd_id': 'ocd-division/country:us/state:wi',
          'office': '709 Hart Senate Office Building',
          'phone': '202-224-5653',
          'fax': null,
          'state': 'WI',
          'senate_class': '1',
          'state_rank': 'junior',
          'lis_id': 'S354',
          'missed_votes_pct': 0.28,
          'votes_with_party_pct': 94.65,
          'votes_against_party_pct': 5.35
        },
        {
          'id': 'B001261',
          'title': 'Senator, 1st Class',
          'short_title': 'Sen.',
          'api_uri': 'https://api.propublica.org/congress/v1/members/B001261.json',
          'first_name': 'John',
          'middle_name': null,
          'last_name': 'Barrasso',
          'suffix': null,
          'date_of_birth': '1952-07-21',
          'gender': 'M',
          'party': 'R',
          'leadership_role': 'Senate Republican Conference Chair',
          'twitter_account': 'SenJohnBarrasso',
          'facebook_account': 'johnbarrasso',
          'youtube_account': 'barrassowyo',
          'govtrack_id': '412251',
          'cspan_id': '1024777',
          'votesmart_id': '52662',
          'icpsr_id': '40707',
          'crp_id': 'N00006236',
          'google_entity_id': '/m/02rsm32',
          'fec_candidate_id': 'S6WY00068',
          'url': 'https://www.barrasso.senate.gov',
          'rss_url': 'https://www.barrasso.senate.gov/public/?a=rss.feed',
          'contact_form': 'https://www.barrasso.senate.gov/public/index.cfm/contact-form',
          'in_office': false,
          'cook_pvi': null,
          'dw_nominate': 0.541,
          'ideal_point': null,
          'seniority': '13',
          'next_election': '2024',
          'total_votes': 717,
          'missed_votes': 0,
          'total_present': 0,
          'last_updated': '2020-12-30 19:01:18 -0500',
          'ocd_id': 'ocd-division/country:us/state:wy',
          'office': '307 Dirksen Senate Office Building',
          'phone': '202-224-6441',
          'fax': null,
          'state': 'WY',
          'senate_class': '1',
          'state_rank': 'junior',
          'lis_id': 'S317',
          'missed_votes_pct': 0.00,
          'votes_with_party_pct': 96.91,
          'votes_against_party_pct': 3.09
        },
        {
          'id': 'B001267',
          'title': 'Senator, 3rd Class',
          'short_title': 'Sen.',
          'api_uri': 'https://api.propublica.org/congress/v1/members/B001267.json',
          'first_name': 'Michael',
          'middle_name': null,
          'last_name': 'Bennet',
          'suffix': null,
          'date_of_birth': '1964-11-28',
          'gender': 'M',
          'party': 'D',
          'leadership_role': null,
          'twitter_account': 'SenBennetCo',
          'facebook_account': 'senbennetco',
          'youtube_account': 'SenatorBennet',
          'govtrack_id': '412330',
          'cspan_id': '1031622',
          'votesmart_id': '110942',
          'icpsr_id': '40910',
          'crp_id': 'N00030608',
          'google_entity_id': '/m/05b60qf',
          'fec_candidate_id': 'S0CO00211',
          'url': 'https://www.bennet.senate.gov/public',
          'rss_url': null,
          'contact_form': 'https://www.bennet.senate.gov/public/index.cfm/contact',
          'in_office': false,
          'cook_pvi': null,
          'dw_nominate': -0.227,
          'ideal_point': null,
          'seniority': '11',
          'next_election': '2022',
          'total_votes': 717,
          'missed_votes': 129,
          'total_present': 1,
          'last_updated': '2020-12-30 19:01:18 -0500',
          'ocd_id': 'ocd-division/country:us/state:co',
          'office': '261 Russell Senate Office Building',
          'phone': '202-224-5852',
          'fax': '202-228-5097',
          'state': 'CO',
          'senate_class': '3',
          'state_rank': 'senior',
          'lis_id': 'S330',
          'missed_votes_pct': 17.99,
          'votes_with_party_pct': 94.91,
          'votes_against_party_pct': 5.09
        },
        {
          'id': 'B001243',
          'title': 'Senator, 1st Class',
          'short_title': 'Sen.',
          'api_uri': 'https://api.propublica.org/congress/v1/members/B001243.json',
          'first_name': 'Marsha',
          'middle_name': null,
          'last_name': 'Blackburn',
          'suffix': null,
          'date_of_birth': '1952-06-06',
          'gender': 'F',
          'party': 'R',
          'leadership_role': null,
          'twitter_account': 'MarshaBlackburn',
          'facebook_account': 'marshablackburn',
          'youtube_account': 'RepMarshaBlackburn',
          'govtrack_id': '400032',
          'cspan_id': '31226',
          'votesmart_id': '25186',
          'icpsr_id': '20351',
          'crp_id': 'N00003105',
          'google_entity_id': '/m/01fnkt',
          'fec_candidate_id': 'H2TN06030',
          'url': 'https://www.blackburn.senate.gov',
          'rss_url': null,
          'contact_form': 'https://www.blackburn.senate.gov/contact_marsha',
          'in_office': false,
          'cook_pvi': null,
          'dw_nominate': 0.619,
          'ideal_point': null,
          'seniority': '1',
          'next_election': '2024',
          'total_votes': 717,
          'missed_votes': 12,
          'total_present': 0,
          'last_updated': '2020-12-30 19:01:18 -0500',
          'ocd_id': 'ocd-division/country:us/state:tn',
          'office': '357 Dirksen Senate Office Building',
          'phone': '202-224-3344',
          'fax': null,
          'state': 'TN',
          'senate_class': '1',
          'state_rank': 'junior',
          'lis_id': 'S396',
          'missed_votes_pct': 1.67,
          'votes_with_party_pct': 94.01,
          'votes_against_party_pct': 5.99
        }
      ];

      const data = await fakeRequest(app)
        .get('/api/congress/senate')
        .set({ Authorization: token })
        .expect('Content-Type', /json/)
        .expect(200);
      
      const truncatedData = data.body.slice(0, 5);

      expect(truncatedData).toEqual(expectation);
    });

    test('Adds a congressperson to the user collection', async() => {

      const rawCongressperson =         {
        'id': 'B001243',
        'title': 'Senator, 1st Class',
        'short_title': 'Sen.',
        'api_uri': 'https://api.propublica.org/congress/v1/members/B001243.json',
        'first_name': 'Marsha',
        'middle_name': null,
        'last_name': 'Blackburn',
        'suffix': null,
        'date_of_birth': '1952-06-06',
        'gender': 'F',
        'party': 'R',
        'leadership_role': null,
        'twitter_account': 'MarshaBlackburn',
        'facebook_account': 'marshablackburn',
        'youtube_account': 'RepMarshaBlackburn',
        'govtrack_id': '400032',
        'cspan_id': '31226',
        'votesmart_id': '25186',
        'icpsr_id': '20351',
        'crp_id': 'N00003105',
        'google_entity_id': '/m/01fnkt',
        'fec_candidate_id': 'H2TN06030',
        'url': 'https://www.blackburn.senate.gov',
        'rss_url': null,
        'contact_form': 'https://www.blackburn.senate.gov/contact_marsha',
        'in_office': false,
        'cook_pvi': null,
        'dw_nominate': 0.619,
        'ideal_point': null,
        'seniority': '1',
        'next_election': '2024',
        'total_votes': 717,
        'missed_votes': 12,
        'total_present': 0,
        'last_updated': '2020-12-30 19:01:18 -0500',
        'ocd_id': 'ocd-division/country:us/state:tn',
        'office': '357 Dirksen Senate Office Building',
        'phone': '202-224-3344',
        'fax': null,
        'state': 'TN',
        'senate_class': '1',
        'state_rank': 'junior',
        'lis_id': 'S396',
        'missed_votes_pct': 1.67,
        'votes_with_party_pct': 94.01,
        'votes_against_party_pct': 5.99
      };

      const expectation = {
        id: 4,
        name: 'Marsha Blackburn',
        chamber: 'Senate',
        state: 'TN',
        seniority: 1,
        party: 'R',
        rogue_factor: '5.99',
        db_id: 'B001243',
        user_id: 2
      };

      const data = await fakeRequest(app)
        .post('/api/my-congress')
        .set({ Authorization: token })
        .send(rawCongressperson)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });


    test('Gets the user collection', async() => {

      const expectation = [{
        id: 4,
        name: 'Marsha Blackburn',
        chamber: 'Senate',
        state: 'TN',
        seniority: 1,
        party: 'R',
        rogue_factor: '5.99',
        db_id: 'B001243',
        user_id: 2
      }];
      
      const data = await fakeRequest(app)
        .get('/api/my-congress')
        .set({ Authorization: token })
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('Deletes a congressperson from the user collection by ID', async() => {

      const expectation = {
        id: 4,
        name: 'Marsha Blackburn',
        chamber: 'Senate',
        state: 'TN',
        seniority: 1,
        party: 'R',
        rogue_factor: '5.99',
        db_id: 'B001243',
        user_id: 2
      };
      
      const data = await fakeRequest(app)
        .delete('/api/my-congress/4')
        .set({ Authorization: token })
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });



  });
});
