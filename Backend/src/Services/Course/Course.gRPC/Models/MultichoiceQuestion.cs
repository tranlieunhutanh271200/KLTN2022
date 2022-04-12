using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Course.gRPC.Models
{
    public class MultichoiceQuestion : Question
    {
        public override bool CheckAnwer(Answer answer)
        {
            var foundAnswer = Answers.FirstOrDefault(ans => ans.Id == answer.Id);
            if (foundAnswer == null)
            {
                return false;
            }
            return foundAnswer.is
        }
    }
}
