using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReclamationsController : ControllerBase
    {
        private readonly ReclamationContext _context;

        public ReclamationsController(ReclamationContext context)
        {
            _context = context;
        }

        // GET: api/Reclamations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reclamation>>> GetReclamation()
        {
            return await _context.Reclamation.ToListAsync();
        }

        // GET: api/Reclamations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reclamation>> GetReclamation(Guid id)
        {
            var reclamation = await _context.Reclamation.FindAsync(id);

            if (reclamation == null)
            {
                return NotFound();
            }

            return reclamation;
        }

        // PUT: api/Reclamations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReclamation(Guid id, Reclamation reclamation)
        {
            if (id != reclamation.Id)
            {
                return BadRequest();
            }

            _context.Entry(reclamation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReclamationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Reclamations
        [HttpPost]
        public async Task<ActionResult<Reclamation>> PostReclamation(Reclamation reclamation)
        {
            _context.Reclamation.Add(reclamation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReclamation", new { id = reclamation.Id }, reclamation);
        }

        // DELETE: api/Reclamations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Reclamation>> DeleteReclamation(Guid id)
        {
            var reclamation = await _context.Reclamation.FindAsync(id);
            if (reclamation == null)
            {
                return NotFound();
            }

            _context.Reclamation.Remove(reclamation);
            await _context.SaveChangesAsync();

            return reclamation;
        }

        private bool ReclamationExists(Guid id)
        {
            return _context.Reclamation.Any(e => e.Id == id);
        }
    }
}
