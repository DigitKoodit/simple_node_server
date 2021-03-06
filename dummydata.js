module.exports = {
    getEmployees: function (callback) {
        var employees = [{
            "id": 1,
            "first_name": "Michelle",
            "last_name": "West",
            "email": "mwest0@github.io",
            "gender": "Female",
            "ip_address": "59.140.234.136"
        }, {
            "id": 2,
            "first_name": "Jessica",
            "last_name": "Frazier",
            "email": "jfrazier1@uol.com.br",
            "gender": "Female",
            "ip_address": "125.46.200.253"
        }, {
            "id": 3,
            "first_name": "Victor",
            "last_name": "James",
            "email": "vjames2@surveymonkey.com",
            "gender": "Male",
            "ip_address": "95.208.134.250"
        }, {
            "id": 4,
            "first_name": "Janice",
            "last_name": "Howell",
            "email": "jhowell3@slate.com",
            "gender": "Female",
            "ip_address": "88.4.207.254"
        }, {
            "id": 5,
            "first_name": "James",
            "last_name": "Knight",
            "email": "jknight4@google.co.uk",
            "gender": "Male",
            "ip_address": "111.174.205.46"
        }, {
            "id": 6,
            "first_name": "Larry",
            "last_name": "Wallace",
            "email": "lwallace5@desdev.cn",
            "gender": "Male",
            "ip_address": "192.78.233.237"
        }, {
            "id": 7,
            "first_name": "George",
            "last_name": "Richards",
            "email": "grichards6@soundcloud.com",
            "gender": "Male",
            "ip_address": "81.12.120.192"
        }, {
            "id": 8,
            "first_name": "Larry",
            "last_name": "Meyer",
            "email": "lmeyer7@aboutads.info",
            "gender": "Male",
            "ip_address": "86.21.165.23"
        }, {
            "id": 9,
            "first_name": "Judy",
            "last_name": "Hayes",
            "email": "jhayes8@ocn.ne.jp",
            "gender": "Female",
            "ip_address": "54.144.164.97"
        }, {
            "id": 10,
            "first_name": "William",
            "last_name": "Fisher",
            "email": "wfisher9@ehow.com",
            "gender": "Male",
            "ip_address": "182.21.210.135"
        }, {
            "id": 11,
            "first_name": "Ruby",
            "last_name": "Burton",
            "email": "rburtona@home.pl",
            "gender": "Female",
            "ip_address": "164.180.14.17"
        }, {
            "id": 12,
            "first_name": "Christina",
            "last_name": "Bailey",
            "email": "cbaileyb@goodreads.com",
            "gender": "Female",
            "ip_address": "183.248.91.24"
        }, {
            "id": 13,
            "first_name": "Robin",
            "last_name": "Wallace",
            "email": "rwallacec@php.net",
            "gender": "Female",
            "ip_address": "143.188.153.203"
        }, {
            "id": 14,
            "first_name": "Kathleen",
            "last_name": "Gray",
            "email": "kgrayd@ow.ly",
            "gender": "Female",
            "ip_address": "34.45.162.109"
        }, {
            "id": 15,
            "first_name": "Kenneth",
            "last_name": "Hanson",
            "email": "khansone@csmonitor.com",
            "gender": "Male",
            "ip_address": "57.30.206.230"
        }, {
            "id": 16,
            "first_name": "Willie",
            "last_name": "Williamson",
            "email": "wwilliamsonf@utexas.edu",
            "gender": "Male",
            "ip_address": "57.59.123.119"
        }, {
            "id": 17,
            "first_name": "Mark",
            "last_name": "Ferguson",
            "email": "mfergusong@technorati.com",
            "gender": "Male",
            "ip_address": "221.127.74.222"
        }, {
            "id": 18,
            "first_name": "Ryan",
            "last_name": "Russell",
            "email": "rrussellh@zdnet.com",
            "gender": "Male",
            "ip_address": "208.141.199.196"
        }, {
            "id": 19,
            "first_name": "Jack",
            "last_name": "Chavez",
            "email": "jchavezi@census.gov",
            "gender": "Male",
            "ip_address": "208.231.139.37"
        }, {
            "id": 20,
            "first_name": "Thomas",
            "last_name": "Lynch",
            "email": "tlynchj@123-reg.co.uk",
            "gender": "Male",
            "ip_address": "222.99.128.131"
        }, {
            "id": 21,
            "first_name": "Amy",
            "last_name": "Henderson",
            "email": "ahendersonk@state.tx.us",
            "gender": "Female",
            "ip_address": "30.88.161.201"
        }, {
            "id": 22,
            "first_name": "Mark",
            "last_name": "Stewart",
            "email": "mstewartl@domainmarket.com",
            "gender": "Male",
            "ip_address": "89.174.45.158"
        }, {
            "id": 23,
            "first_name": "James",
            "last_name": "Green",
            "email": "jgreenm@wix.com",
            "gender": "Male",
            "ip_address": "98.140.20.28"
        }, {
            "id": 24,
            "first_name": "Linda",
            "last_name": "Ferguson",
            "email": "lfergusonn@npr.org",
            "gender": "Female",
            "ip_address": "252.99.244.4"
        }, {
            "id": 25,
            "first_name": "Billy",
            "last_name": "Olson",
            "email": "bolsono@weebly.com",
            "gender": "Male",
            "ip_address": "135.128.188.198"
        }, {
            "id": 26,
            "first_name": "Lois",
            "last_name": "Cook",
            "email": "lcookp@shutterfly.com",
            "gender": "Female",
            "ip_address": "183.55.92.201"
        }, {
            "id": 27,
            "first_name": "Sharon",
            "last_name": "Dean",
            "email": "sdeanq@indiatimes.com",
            "gender": "Female",
            "ip_address": "159.174.253.232"
        }, {
            "id": 28,
            "first_name": "Steve",
            "last_name": "Lawrence",
            "email": "slawrencer@npr.org",
            "gender": "Male",
            "ip_address": "225.112.230.12"
        }, {
            "id": 29,
            "first_name": "Philip",
            "last_name": "Cox",
            "email": "pcoxs@51.la",
            "gender": "Male",
            "ip_address": "230.11.249.151"
        }, {
            "id": 30,
            "first_name": "Marie",
            "last_name": "Larson",
            "email": "mlarsont@t.co",
            "gender": "Female",
            "ip_address": "107.41.176.226"
        }, {
            "id": 31,
            "first_name": "Margaret",
            "last_name": "Grant",
            "email": "mgrantu@parallels.com",
            "gender": "Female",
            "ip_address": "196.218.9.248"
        }, {
            "id": 32,
            "first_name": "Maria",
            "last_name": "Gutierrez",
            "email": "mgutierrezv@cocolog-nifty.com",
            "gender": "Female",
            "ip_address": "207.243.76.26"
        }, {
            "id": 33,
            "first_name": "Harry",
            "last_name": "Wilson",
            "email": "hwilsonw@fc2.com",
            "gender": "Male",
            "ip_address": "212.117.144.148"
        }];
        setTimeout(function() {
            callback(employees);
        }, 1000);
        
    }
}