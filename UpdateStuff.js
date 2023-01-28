// FRONT END 
const closeTicket = async (ticketId, token) => {
  
  const response = await axios.put(
    API_URL + ticketId,
    { status: 'closed' },
  )

  return response.data
}


BACK END 

// @route   PUT /api/tickets/:id
const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,    // --> change to 'closed' status 
  )

  res.status(200).json(updatedTicket)
})










