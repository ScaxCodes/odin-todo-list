import { formatDistance, subDays } from 'date-fns'

console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }))
//=> "3 days ago"

console.log("hi");