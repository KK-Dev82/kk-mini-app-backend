#!/bin/bash

# Fix all Prisma enum imports to use common/enums instead

find src -name "*.ts" -type f -exec sed -i '' \
  -e "s/import { UserRole } from '@prisma\/client';/import { UserRole } from '..\/..\/..\/common\/enums';/g" \
  -e "s/import { WhitelistStatus, UserRole } from '@prisma\/client';/import { WhitelistStatus, UserRole } from '..\/..\/..\/common\/enums';/g" \
  -e "s/import { CheckinType, LocationType } from '@prisma\/client';/import { CheckinType, LocationType } from '..\/..\/..\/common\/enums';/g" \
  -e "s/import { LocationType, Worksite } from '@prisma\/client';/import { LocationType } from '..\/..\/..\/common\/enums';\nimport { Worksite } from '@prisma\/client';/g" \
  -e "s/import { ProjectRole } from '@prisma\/client';/import { ProjectRole } from '..\/..\/..\/common\/enums';/g" \
  -e "s/import { ProjectStatus } from '@prisma\/client';/import { ProjectStatus } from '..\/..\/..\/common\/enums';/g" \
  -e "s/import { PhaseStatus } from '@prisma\/client';/import { PhaseStatus } from '..\/..\/..\/common\/enums';/g" \
  -e "s/import { TaskPriority } from '@prisma\/client';/import { TaskPriority } from '..\/..\/..\/common\/enums';/g" \
  -e "s/import { TaskStatus, TaskPriority } from '@prisma\/client';/import { TaskStatus, TaskPriority } from '..\/..\/..\/common\/enums';/g" \
  {} \;

echo "Fixed all enum imports!"
