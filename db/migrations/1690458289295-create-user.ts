import { MigrationInterface, QueryRunner , Collection} from "typeorm"
import { User } from '../../src/common/decorators/user.decorator';

export class CreateUser1690458289295 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        db.collection('inventory').find({});

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);

    }

}
