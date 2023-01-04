import moment from "moment";

export function getDateRange(startDate, endDate, type) {
  const start = moment(startDate, type)
  const end = moment(endDate, type)

  const current = start.clone()
  const result = []

  while (current.isBefore(end + 1)) {
    result.push(Number(current.format("YYYY")))
    current.add(1, "year")
  }

  return result
}
