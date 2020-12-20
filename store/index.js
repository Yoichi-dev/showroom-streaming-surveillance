export const state = () => ({
    roomid: null,
    comment: null,
    freegift: null,
    pregift: null
})

export const mutations = {
    setRoomid(state, roomid) {
        state.roomid = roomid
    },
    setComment(state, comment) {
        state.comment = comment
    },
    setFreegift(state, freegift) {
        state.freegift = freegift
    },
    setPregift(state, pregift) {
        state.pregift = pregift
    }
}