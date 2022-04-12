using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.DB
{
    public interface IDbProvider
    {
        DbConnection CreateConnection(string connectionString);
        DbParameter AddParameter(string parameterName, object value, ParameterDirection direction);
        DbParameter DeleteParameter(string parameterName);
        DbParameter ClearParameters();
        DataSet ExecuteDatasetSP(string storeProcedureName);
        DataTable ExecuteDatatableSP(string storeProcedureName);
    }
}
