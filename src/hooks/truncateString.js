export function truncateString(value, limit, after) {
    if (!value || !limit) return;

    let content = value.trim()

    if (content.split(" ").length > 3) {
        content = content.split(" ").slice(0, limit)

        content = content.join(" ") + (after ? after : "")

        value = content
        return value
    }
    return value

}
