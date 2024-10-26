This is a development centric README.

**Pages**:

1. `/index` provides search box and overall status (number of interrupted locations), highways interrupted, etc.
1. `/highway/<id>` detail page of each highway.
1. `/province/<id>` detail page of each province.
1. `/district/<id>` detail page of each district.
1. `/event/<id>` detail page of each event.

**Models**:

```
Highway:
    id: int
    name: string
    name_nepali: string

Province:
    id: int
    name: string
    name_nepali: string

District:
    id: int
    name: string
    name_nepali: string
    province: Province.id

Latitude: float
Longitude: float

Event:
    id: int
    location_long: Longitude
    location_lat: Latitude
    location: string
    location_nep: string
    district: District.id
    highways: []Highway.id # This is an array bc some road section could be intersection of multiple highways.
    status: []Status

Status:
    time: timestamp
    condition: string
    condition_nep: string
    code: CLOSED | ONE_WAY | OPEN
```

Our data source is an array of `Event`s. Each event represents the data for the `/event/<id>` page. If we group that
event array by district id, we'll have data for each `/district/<id>` page, grouping by district gives data for
`/provice/<id>` page. Likewise, grouping by highway id, gives data for `/highway/<id>` page. Data required for `/index`
page can also be extracted similarly.

**Implementation**:

We'll have a data file for each english month in the format `data-YYYY-MM.toml` (example: data-2024-10.toml) that has a
single key `data` whose value is an array of `Event`s. By consuing all data files of the given format, we'll build one
large array of `Event`s that will be consumed by the various pages as mentioned above.

All data files can be kept in a `data` folder in the same repository that this code lives under, anyone can perform a
status update by sending a Pull Request that adds an `Event` entry in the data file for the current month.

**Pros and Cons**:

1. This implementation model forces our data to be open source as we're envisioning people contributing to status
   updates. Making data accessible has all sorts of benefits.
1. Data lives in text files, no overhead of database setup/management.
1. We can generate a simple static site based on the data on each git push. No server costs.
1. The way we're generating a page for each event, `/event/<id>`, creates a permanent record for each event in its
   webpage. This can also serve as a historical record for the event.
1. Cons: might be harder to hand over to a governmental entitry like Traffic or Road Department for centralized
   management. The nature of this project makes this suitable for publicly managed information system, and doesn't suit
   for centrally managed style.

**Dev**:

```
npm i
npm run dev
```

**TODO**:

- [ ] Setup pre-commit hooks
- [x] Create models
- [x] Data directory, helper functions for reading data directory, parsing events array etc.
- [x] Add testing framework, setup some tests
- [ ] Add tests for helper functions reading data directory, parsing events etc.
- [ ] Populate data to `/index`
- [ ] UI `/index`
- [ ] Populate data to `/highway/<id>`
- [ ] UI `/highway/<id>`
- [ ] Populate data to `/province/<id>`
- [ ] UI `/province/<id>`
- [ ] Populate data to `/district/<id>`
- [ ] UI `/district/<id>`
- [ ] Populate data to `/event/<id>`
- [ ] UI `/event/<id>`
- [ ] Github Actions for formatting/linting
- [ ] Github Actions for checking validity of `data/` directory and files
- [ ] Add validation script to check if the data in each data file is valid: belongs to corresponding month file and id
      is unique for each event, etc. etc.
- [ ] Migrate to eslint v9. NextJS 15 (which we are using) techincally supports the version 9 but doesn't provide any
      documentation whatsoever regarding how to replace the `extends` keyword which eslint v9 doesn't support.
