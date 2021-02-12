import { LucidRow, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Model'
import { BaseModel } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';

export const softDeleteQuery = (query: ModelQueryBuilderContract<typeof BaseModel>) => {
  query.whereNull('deleted_at')
}

export const softDelete = async (row: LucidRow, column: string = 'deletedAt') => {
    try {
        row[column] = DateTime.local();
        await row.save();
    } catch (error) {
        console.log(error)
    }
}