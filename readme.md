okay the idea here is a review site where you can rate the lawns of your neighbors

glassdoor.. grassdoor... get it?

App
- home
    - submit my lawn (post)
    - see lawns (get), include star ratings
- indv lawn
    - see lawn (get :id)
    - see reviews (get)
    - review lawns (post)
    - update review (patch)
    - delete review (delete)

Database

- lawns
    has many reviews
    string name
    string address

- reviews
    belongs_to lawn
    string reviewer
    integer stars
    review_date timestamp <- this isn't seeded yet, or working

